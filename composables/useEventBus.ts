import mitt from 'mitt'

interface Popup {
    name: string,
    data: object
}

type PopupEvents = {
    'popup:open': Popup,
    'popup:close': Popup,
    'popup:toggle': Popup,
};

const emitter = mitt<Popup>()

export const useEvent = emitter.emit
export const useListen = emitter.on