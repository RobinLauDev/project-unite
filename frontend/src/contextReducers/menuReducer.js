export const menuState = {
    showCloseButton: false,
    showMenu: false,
}
  
export const menuReducer = (firstState, action) => {
    switch (action) {
        case "OPEN MENU":
        return {
            showCloseButton: true,
            showMenu: true,
        }
        case "CLOSE MENU":
        return {
            showCloseButton: false,
            showMenu: false,
        }
        default:
        throw new Error()
    }
}