if(cdnuse == "1"){
//尽量使用Jsdelivr
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/npm\/docsify\/lib\/docsify.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/npm\/docsify\/lib\/plugins\/search.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/npm\/docsify\/lib\/plugins\/zoom-image.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/npm\/docsify-copy-code\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/npm\/docsify\/lib\/plugins\/emoji.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/gh\/xhemj\/xhemj.github.io@master\/backup\/js\/docsify-pagination.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/gh\/xhemj\/xhemj.github.io@master\/backup\/js\/docsify-footer-enh.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/gh\/xhemj\/xhemj.github.io@master\/backup\/js\/docsify-remote-markdown.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/npm\/docsify\/lib\/plugins\/external-script.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/gh\/827652549\/docsify-count@master\/dist\/countable.min.js\"><\/script>");
}
if(cdnuse == "2"){
//尽量使用cdnjs
document.write("<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/docsify\/4.11.2\/docsify.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/docsify\/4.11.2\/plugins\/search.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/docsify\/4.11.2\/plugins\/zoom-image.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/docsify\/4.11.2\/plugins\/emoji.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/docsify\/4.11.2\/plugins\/external-script.min.js\"><\/script>");
document.write("<script src=\"https:\/\/unpkg.com\/docsify-remote-markdown\/dist\/docsify-remote-markdown.min.js\"><\/script>");
document.write("<script src=\"https:\/\/unpkg.com\/docsify-footer-enh\/dist\/docsify-footer-enh.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/gh\/827652549\/docsify-count@master\/dist\/countable.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/gh\/xhemj\/xhemj.github.io@master\/backup\/js\/docsify-pagination.min.js\"><\/script>");
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/npm\/docsify-copy-code\"><\/script>");

}
if(cdnuse == "3"){
//使用Jsdelivr压缩合并功能
document.write("<script src=\"https:\/\/cdn.jsdelivr.net\/combine\/npm\/docsify\/lib\/docsify.min.js,npm\/docsify\/lib\/plugins\/search.min.js,npm\/docsify\/lib\/plugins\/zoom-image.min.js,npm\/docsify-copy-code,npm\/docsify\/lib\/plugins\/emoji.min.js,gh\/xhemj\/xhemj.github.io@master\/backup\/js\/docsify-pagination.min.js,gh\/xhemj\/xhemj.github.io@master\/backup\/js\/docsify-footer-enh.min.js,gh\/xhemj\/xhemj.github.io@master\/backup\/js\/docsify-remote-markdown.min.js,npm\/docsify\/lib\/plugins\/external-script.min.js,gh\/827652549\/docsify-count@master\/dist\/countable.min.js\">");
}
//备用cdn库
//<script src="https://cdn.bootcdn.net/ajax/libs/docsify/4.11.2/docsify.js"></script>
