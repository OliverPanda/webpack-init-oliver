// const baseUrl = '';
exports.baseUrl = '';

export default async(url = '', type = 'GET', data = {}, method = 'fetch') => {
    url = baseUrl + url;
    type = type.toLocaleUpperCase();

    if(type == 'GET') {
        let dataStr = '';
        // &拼接传过来的json数据
        Object.keys(data).forEach(key => {
            dataStr += key + "=" + data[key] + '&'
        })

        // 删掉最后一个&
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url  + '?' + dataStr
    }

    if(window.fetch && method == 'fetch') {
        // fetch头设置
        let requestHeader = {
            mode: "cors",
            cache: "force-cache",
            credentials: "include",
            method: type,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        
        // POST的话，把数据封装到请求头中
        if(type == "POST") {
            Object.defineProperties(requestHeader, 'body', {
                value: JSON.stringify(data)
            })
        }

        try {
            return fetch(url, requestHeader).then(responce => responce.json())
        } catch (e) {
            console.log(e)
        }
    } else {
        // 不是用fetch的普通请求,返回一个Promise对象
        return new Promise ((resolve, reject) => {
            let xhr;
            if(window.XMLHttpRequest) {
                xhr = new XMLHttpRequest()
            } else {
                xhr = new ActiveXObject
            }

            let sendData;
            if( type == 'POST') {
                sendData = Json.stringify(data)
            }
            xhr.open(type, url, true);
            // x-www-form-urlencode    HTML中表单的默认提交方式
            xhr.setRequestHeader({
                'Content-Type': 'application/x-www-form-urlencode'
            })
            xhr.send(sendData)

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.readyState == 200) {
                        let obj = xhr.response
                        if(typeof obj !== 'object') {
                            obj = JSON.parse(obj)
                        }
                        resolve()
                    }
                } else {
                    reject(xhr)
                }
            }
        })
    }
