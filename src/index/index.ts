import { Hummer, Navigator, View, Scroller, Text, Image, TapEvent } from '@hummer/hummer-front'

class RootView extends View {
    constructor() {
        super()
        this.style = {
            width: '100%',
            height: '100%',
        }
        let scrollView = new Scroller()
        scrollView.style = {
            width: '100%',
            height: '100%',
            backgroundColor: '#F5F5F5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            padding: 15
        }

        this.appendChild(scrollView)

        let data = [
            'Comp_Animation',
            'Comp_Button',
            'Comp_Dialog',
            'Comp_HorizontalScroller',
            'Comp_Image',
            'Comp_Image_base64',
            'Comp_Input',
            'Comp_Input_Type',
            'Comp_Layout',
            'Comp_List',
            'Comp_Loading',
            'Comp_Navigator_Page1',
            'Comp_Navigator_Page2',
            'Comp_Navigator_Page3',
            'Comp_RichText',
            'Comp_Scroller',
            'Comp_Scroller_Memory_Test',
            'Comp_Scroller_Test',
            'Comp_Switch',
            'Comp_Text',
            'Comp_Toast',
            'Comp_View',
            'Comp_ViewPager',
            'Comp_View_Child',
            'Comp_View_Deg',
            'Comp_View_Layout',
            'Comp_View_Touch',
            'HelloWorld',
            'Module_Lifecycle',
            'Module_Location',
            'Module_Memory',
            'Module_NotifyCenter',
            'Module_Request',
            'Module_Storage',
            'Module_Timer',
            'Module_WebSocket',
            'Performance_1000_Views_add',
            'Sample_Anim_Loading',
            'Sample_Anim_Ripple',
            'Sample_VerifyCode',
            'TestStack',
            'Test_Callback',
            'Test_CornerRadius',
            'Test_Env',
            'Test_ResetStyle',
            'Test_TestExportModel'
        ]
        data.forEach(name => {
            let url = 'https://raw.githubusercontent.com/didi/Hummer/master/examples/' + name + '.js'
            let content = new View()
            content.style = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
            }
            scrollView.appendChild(content)

            // 标题
            let titleLabel = new Text()
            titleLabel.text = name
            titleLabel.style = {
                color: '#888888',
                fontSize: 15,
                fontWeight: 'bold',
            }
            content.appendChild(titleLabel)

            // 卡片
            let card = new View()
            card.style = {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                marginTop: 5,
                marginBottom: 15,
                shadow: '4px 4px 8px #eeeeee'
            }
            content.appendChild(card)

            // 预览
            let previewCell = this.createCell('点击预览')
            card.appendChild(previewCell)
            previewCell.addEventListener('tap', event => {
                Navigator.openPage({
                    url: url
                }, null)
            })

            // 分割线
            let separator = new View()
            separator.style = {
                backgroundColor: '#eeeeee',
                height: '1px'
            }
            card.appendChild(separator)

            // 源码
            let sourceCell = this.createCell('查看源码')
            card.appendChild(sourceCell)
            sourceCell.addEventListener('tap', event => {
                let page = {
                    url: './detail.js',
                    params: { url }
                }
                Navigator.openPage(page, null)
            })
        })
    }

    createCell(text: string) {
        let cell = new View()
        cell.style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }

        let label = new Text()
        label.text = text
        label.style = {
            fontSize: 14,
            color: '#666666',
            margin: 10
        }
        cell.appendChild(label)

        let imgView = new Image()
        imgView.style = {
            width: 12,
            height: 12,
            resize: 'stretch',
            marginRight: 10
        }
        imgView.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABFklEQVRoge3awU3DQBSE4VdCSqCElEAJlLCSPSOLEwVwyDFHd4A7gBLoICmBDkgBSOHiRE7YrJ3TvEXvlyyfLH1jySev2R11XfdA8p3kEcCO5NM9z0tLKa0AfJM8Ti8Ab2rboki+XOOrGkFyc2vAOKJXG4u1bftYGjCOSGpnMZJDjPBQjPBSjPBSjPBSjPBSjPBSjPBSjPBSbgSAi3vTNM9qZ7HpiBP6atCP2jgbySGHn4x4VRuLAUgz38JWbbzZHH4csFY7sy3BkxzUzmyBVxV4VYFX9e/xAD7VzmwL3/w+pbRSW/8UeFWBVxV4VUv+VLrFm5mRPFSLB7CuFm92PuhRJ/4UgI9q8WbnEys9yQOALwC9Gv8LkWzAH5KJO8UAAAAASUVORK5CYII='
        cell.appendChild(imgView)

        return cell
    }
}

Hummer.render(new RootView())