// tilda-fallback-local.js
function t_fallback__init() {
    t_fallback__initTags("LINK");
    t_fallback__initTags("SCRIPT");
    if ("loading" != document.readyState) {
        t_fallback__initTags("IMG");
    } else {
        document.addEventListener("DOMContentLoaded", function() {
            t_fallback__initTags("IMG");
        });
    }
}

function t_fallback__initTags(tagType) {
    var elements = document.querySelectorAll(tagType);
    Array.prototype.forEach.call(elements, function(el) {
        if ("set" !== el.isReloadFuncSet) {
            el.onerror = function() {
// console.warn("Failed to load:", this.src || this.href);
                this.isReloadFuncSet = "set";
            };
            el.isReloadFuncSet = "set";
        }
    });
}

t_fallback__init();