// !

// function pjaxLoad(){
//     $(document).pjax('#tree a', '#content', {fragment:'#content', timeout:8000});
//     $(document).pjax('#menu a', '#content', {fragment:'#content', timeout:8000});
//     $(document).pjax('#articleList a', '#content', {fragment:'#content', timeout:8000});
//     $(document).on({
//         "pjax:complete": function(e) {
//             $("pre code").each(function (i, block){
//                 hljs.highlightBlock(block);
//             });
            
//             // 添加 active
//             $("#tree .active").removeClass("active");
//             e.relatedTarget.parentNode.classList.add("active");

//             showArticleIndex();
//         }
//     });
// }
