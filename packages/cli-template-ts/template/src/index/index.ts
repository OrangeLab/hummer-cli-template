import {Hummer,View, Text} from '@hummer/hummer-front'
class RootView extends View {
  constructor() {
    super();
    this.style = {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
    this.initElement()
  }

  initElement(){
    this.appendText('~ Hello Hummer ~')
  }

  appendText(message:string){
    var text = new Text()
    text.style = {
      fontSize: 20
    }
    text.text = message
    this.appendChild(text);
  }
}

// 根页面渲染
Hummer.render(new RootView());