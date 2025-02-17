// 创建一个MutationObserver实例，用于监听DOM的变化
var observer = new MutationObserver(function (mutations) {
    // 查找页面中class为"aplayer-icon-lrc"的元素
    var lrcButton = document.querySelector(".aplayer-icon-lrc");
    // 如果找到了lrcButton
    if (lrcButton) {
        // 延迟1毫秒执行点击操作
        setTimeout(function () {
            lrcButton.click();
        }, 1);
        // 打印"success"到控制台
        console.log("success");
        // 断开MutationObserver实例，停止监听DOM的变化
        observer.disconnect();
    }
});
// 监听整个文档及其子节点的变化
observer.observe(document, { childList: true, subtree: true });

