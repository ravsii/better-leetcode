import { BaseWebview } from "./baseWebview"

class PreviewWebview extends BaseWebview {
    public show(title: string, content: string) {
        super.show(`Preview: ${title}`, content)
    }
}

export const previewWebview = new PreviewWebview()
