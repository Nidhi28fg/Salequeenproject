!function(n) {
    "use strict";
    function t() {
        this.$body = n("body")
    }
    t.prototype.init = function() {
        n(".tasklist").each(function() {
            Sortable.create(n(this)[0], {
                group: "shared",
                animation: 150,
                ghostClass: "bg-ghost"
            })
        })
    }
    ,
    n.KanbanBoard = new t,
    n.KanbanBoard.Constructor = t
}(window.jQuery),
function() {
    "use strict";
    window.jQuery.KanbanBoard.init()
}();
