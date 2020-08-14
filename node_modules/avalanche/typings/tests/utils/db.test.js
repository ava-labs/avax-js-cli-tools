"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("src/utils/db"));
describe('DB', () => {
    test('instantiate singletone', () => {
        const db1 = db_1.default.getInstance();
        const db2 = db_1.default.getInstance();
        expect(db1).toEqual(db2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3RzL3V0aWxzL2RiLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFFOUIsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtRQUNsQyxNQUFNLEdBQUcsR0FBTSxZQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsTUFBTSxHQUFHLEdBQU0sWUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEQiBmcm9tICdzcmMvdXRpbHMvZGInO1xuXG5kZXNjcmliZSgnREInLCAoKSA9PiB7XG4gIHRlc3QoJ2luc3RhbnRpYXRlIHNpbmdsZXRvbmUnLCAoKSA9PiB7XG4gICAgY29uc3QgZGIxOkRCID0gREIuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCBkYjI6REIgPSBEQi5nZXRJbnN0YW5jZSgpO1xuICAgIGV4cGVjdChkYjEpLnRvRXF1YWwoZGIyKTtcbiAgfSk7XG59KTtcbiJdfQ==