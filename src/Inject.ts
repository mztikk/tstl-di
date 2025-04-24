import { container } from './Container'

export function Inject(token: string) {
    return function <This, Value>(target: unknown, key: ClassFieldDecoratorContext<This, Value>) {
        Object.defineProperty(target, key.name, {
            get: () => container.resolve(token),
            enumerable: true,
            configurable: true
        })
    }
}
