enum Type {
    Strong,
    Week
}

class Java {
    helloJava(){
        console.log('hello Java');
    }
    java: any
}

class JavaScript {
    helloJavaScript(){
        console.log('hello JavaScript');
    }
    javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number){
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    // if((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJavaScript();
    // }

    // 1) instanceof
    if(lang instanceof Java) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    // 2) in
    if('java' in lang) {
        lang.helloJava()
    } else {
        lang.helloJavaScript();
    }

    // 3) typeof 
    if(typeof x === 'string') {
        x.length
    } else {
        x.toFixed(2);
    }

    // 4) 创建类型保护函数来判断对象的类型
    if(isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    return lang;
}