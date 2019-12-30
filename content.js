chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "get_images") {
        let formatted_images = [];

        let images = $('img').map((i, img) => {
            if($(img).data('src')) {
                formatted_images.push({
                    src: $(img).data('src')
                })
            } else if($(img).src) {
                formatted_images.push({
                    src: $(img).src
                })
            }
        })

        sendResponse(formatted_images);
    }
})