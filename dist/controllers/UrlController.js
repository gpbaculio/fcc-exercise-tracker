"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Url_1 = require("../models/Url");
class WhoAmIController {
    constructor() {
        this.isValidUrl = (url) => {
            const test = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            if (test)
                return true;
            else
                return false;
        };
        this.generateNum = () => __awaiter(this, void 0, void 0, function* () {
            const num = Math.floor(Math.random() * 1000000000);
            const url = yield Url_1.default.findOne({ shortUrl: num });
            if (url)
                return this.generateNum();
            else
                return num;
        });
        this.findUrl = (originalUrl) => __awaiter(this, void 0, void 0, function* () {
            const url = yield Url_1.default.findOne({ originalUrl });
            if (url)
                return url;
            else
                return null;
        });
        this.newUrl = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { url: original_url } = req.body;
            if (this.isValidUrl(original_url)) {
                let url = yield this.findUrl(original_url);
                if (url !== null)
                    return res.json({
                        original_url: url.originalUrl,
                        short_url: url.shortUrl
                    });
                else {
                    const shortUrlNum = yield this.generateNum();
                    url = yield new Url_1.default({
                        originalUrl: original_url,
                        shortUrl: shortUrlNum
                    });
                    url
                        .save()
                        .then(() => {
                        res.json({ original_url, shortUrl: shortUrlNum });
                    })
                        .catch(error => res.json({ error }));
                }
            }
            else
                res.json({ error: 'invalid Url' });
        });
        this.isHttp = url => {
            const regEx = new RegExp('^(http|https)://', 'i');
            if (regEx.test(url))
                return true;
            else
                return false;
        };
        this.handleRedirect = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const shortUrlNum = Number(req.params.shortUrlNum);
            if (!isNaN(shortUrlNum)) {
                yield Url_1.default.findOne({ shortUrl: shortUrlNum }, (err, result) => {
                    if (!err) {
                        if (result !== null) {
                            const url = `${result.originalUrl}`;
                            if (this.isHttp(url)) {
                                res.redirect(url);
                            }
                            else {
                                res.redirect(`http://${url}`);
                            }
                        }
                        else
                            res.json({ error: 'Cannot find Shortened Url in database' });
                    }
                    else {
                        res.json({ error: err });
                    }
                });
            }
            else {
                res.json({ error: 'Wrong Format' });
            }
        });
    }
}
exports.default = WhoAmIController;
//# sourceMappingURL=UrlController.js.map