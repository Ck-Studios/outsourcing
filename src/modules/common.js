const initialState = {
    openMenu: false
}

export const OPEN_MENU = "common/OPEN_MENU";
export const CLOSE_MENU = "common/CLOSE_MENU";

export default function common(state=initialState, action) {
    switch(action.type) {
        case OPEN_MENU:
            return {
                ...state,
                openMenu: true,
            }

        case CLOSE_MENU:
            return {
                ...state,
                openMenu: false,
            }

        default:
            return {...state}
    }
}


export function openMenu() {
    return {
        type: OPEN_MENU,
    }
}

export function closeMenu() {
    return {
        type: CLOSE_MENU,
    }
}