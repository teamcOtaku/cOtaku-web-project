onload = function () {
    $(document).ready(function(){
        $('ul.tabs').tabs();
    });
    $(document).ready(function(){
        $('ul.tabs').tabs('select_tab', 'tab_id');
    });
};