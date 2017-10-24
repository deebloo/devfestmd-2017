import { CoreService } from './core.service';

describe('CoreService', () => {
  it('should return cool folks', () => {
    expect(new CoreService().getUsers().length).toBe(3);
  });
});
