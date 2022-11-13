export class Container {
    private _providers: Map<string, () => any> = new Map();

    public resolve(token: string) {
        const matchedProvider = this._providers.get(token)

        if (matchedProvider) {
            return matchedProvider()
        } else {
            throw new Error(`No provider found for ${token}!`)
        }
    }

    public instance(token: string, obj: any) {
        this._providers.set(token, () => obj)
    }

    public singleton(token: string, target: { new(): any }) {
        this.instance(token, new target())
    }

    public register(token: string, target: { new(): any }) {
        this._providers.set(token, () => new target())
    }
}

export const container = new Container()
