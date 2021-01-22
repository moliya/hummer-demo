import { Hummer, View, Request, TextArea } from '@hummer/hummer-front'

class RootView extends View {
    constructor() {
        super()
        this.style = {
            width: '100%',
            height: '100%'
        }

        let textView = new TextArea()
        textView.style = {
            width: '100%',
            height: '100%'
        }
        this.appendChild(textView)

        let request = new Request()
        request.url = Hummer.pageInfo.params.url
        request.send(res => {
            textView.text = JSON.stringify(res)
        })
    }
}

Hummer.render(new RootView())