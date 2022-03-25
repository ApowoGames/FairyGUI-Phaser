export class ObjectUtils {
    public static hasOwnProperty(object: any, key: string): boolean {
        return object.hasOwnProperty(key);
    }

    public static defineProperty(object: any, property: any): any {
        Object.defineProperties(object, property);
        return object;
    }
}
