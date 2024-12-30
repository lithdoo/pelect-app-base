

const globe: {
    pelect: {
        fileAction: {
            actionName: string,
            ico?: SVGAElement
            fileTest: (file: { fileUrl: string }) => boolean,
            handler: (fileUrl: string) => void
        }[],
        tabAction: {
            tabKeyName: string,
            handler: (...argus: unknown[]) => TabOption
        }[],
        onOpenTab: (keyName: string, ...argus: unknown[]) => void,
    },
} = globalThis as any;


export type TabOption = {
    view: HTMLElement, tabId: string, title: string, ico?: SVGAElement
}

if ((globe as any)['pelect'] === undefined) {
    globe['pelect'] = {
        'fileAction': [],
        'tabAction': [],
        'onOpenTab': () => { }
    }
}

export const register = new class {
    fileAction(
        actionName: string,
        fileTest: (file: { fileUrl: string }) => boolean,
        handler: (fileUrl: string) => void
    ) {
        globe.pelect.fileAction.push({
            fileTest,
            actionName,
            handler
        })
    }

    tabAction(
        tabKey: string,
        handler: (...argus: unknown[]) => TabOption
    ) {
        globe.pelect.tabAction.push({
            tabKeyName: tabKey,
            handler
        })
    }
}


export const api = new class {
    openTab: (keyName: string, ...argus: unknown[]) => void = (keyName, ...argus) => {
        globe.pelect.onOpenTab(keyName, ...argus)
    }
}