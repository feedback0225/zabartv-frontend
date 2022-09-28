export const getSessionId = () => {
    if (typeof window === 'undefined') {
        return 'qweqwe'
    } else {
        if(!window?.sessionStorage?.getItem('id')?.length) {
            window.sessionStorage.setItem('id', String(Date.now()))
        }
    
        return window.sessionStorage.getItem('id')
    }
}