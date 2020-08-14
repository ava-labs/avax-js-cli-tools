"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @packageDocumentation
 * @module Utils-DB
 */
const store2_1 = __importDefault(require("store2"));
/**
 * A class for interacting with the {@link https://github.com/nbubna/store| store2 module}
 *
 * This class should never be instantiated directly. Instead, invoke the "DB.getInstance()" static
 * function to grab the singleton instance of the database.
 *
 * ```js
 * const db = DB.getInstance();
 * const blockchaindb = db.getNamespace("mychain");
 * ```
 */
class DB {
    constructor() { }
    /**
       * Retrieves the database singleton.
       */
    static getInstance() {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance;
    }
    /**
       * Gets a namespace from the database singleton.
       *
       * @param ns Namespace to retrieve.
       */
    static getNamespace(ns) {
        return this.store.namespace(ns);
    }
}
exports.default = DB;
DB.store = store2_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0dBR0c7QUFDSCxvREFBMkI7QUFFM0I7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQXFCLEVBQUU7SUFLckIsZ0JBQXVCLENBQUM7SUFFeEI7O1NBRUs7SUFDTCxNQUFNLENBQUMsV0FBVztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNoQixFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7U0FDeEI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7O1NBSUs7SUFDTCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQVM7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDOztBQXhCSCxxQkF5QkM7QUF0QmdCLFFBQUssR0FBRyxnQkFBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqIEBtb2R1bGUgVXRpbHMtREJcbiAqL1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlMic7XG5cbi8qKlxuICogQSBjbGFzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9uYnVibmEvc3RvcmV8IHN0b3JlMiBtb2R1bGV9XG4gKlxuICogVGhpcyBjbGFzcyBzaG91bGQgbmV2ZXIgYmUgaW5zdGFudGlhdGVkIGRpcmVjdGx5LiBJbnN0ZWFkLCBpbnZva2UgdGhlIFwiREIuZ2V0SW5zdGFuY2UoKVwiIHN0YXRpY1xuICogZnVuY3Rpb24gdG8gZ3JhYiB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBkYXRhYmFzZS5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgZGIgPSBEQi5nZXRJbnN0YW5jZSgpO1xuICogY29uc3QgYmxvY2tjaGFpbmRiID0gZGIuZ2V0TmFtZXNwYWNlKFwibXljaGFpblwiKTtcbiAqIGBgYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEQiB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOkRCO1xuXG4gIHByaXZhdGUgc3RhdGljIHN0b3JlID0gc3RvcmU7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBkYXRhYmFzZSBzaW5nbGV0b24uXG4gICAgICovXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBEQiB7XG4gICAgaWYgKCFEQi5pbnN0YW5jZSkge1xuICAgICAgREIuaW5zdGFuY2UgPSBuZXcgREIoKTtcbiAgICB9XG4gICAgcmV0dXJuIERCLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAgICogR2V0cyBhIG5hbWVzcGFjZSBmcm9tIHRoZSBkYXRhYmFzZSBzaW5nbGV0b24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbnMgTmFtZXNwYWNlIHRvIHJldHJpZXZlLlxuICAgICAqL1xuICBzdGF0aWMgZ2V0TmFtZXNwYWNlKG5zOnN0cmluZyk6IHN0b3JlLlN0b3JlQVBJIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5uYW1lc3BhY2UobnMpO1xuICB9XG59XG4iXX0=