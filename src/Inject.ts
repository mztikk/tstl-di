import { container } from './Container'

export function Inject(token: string) {
    return function (target: unknown, key: string) {
        Object.defineProperty(target, key, {
            get: () => container.resolve(token),
            enumerable: true,
            configurable: true
        })
    }
}
