import { useExecutionQueue } from "./";
import { renderHook, act } from "@testing-library/react-hooks";

jest.useFakeTimers();

describe("useExecutionQueue", () => {
  it("queue works as intended", () => {
    const { result } = renderHook(() => useExecutionQueue());
    expect(result.current.queue).toHaveLength(0);

    const mockFn = jest.fn();
    act(() => {
      result.current.addToQueue(mockFn);
    });
    expect(result.current.queue).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.queue).toHaveLength(0);
    expect(mockFn).toHaveBeenCalled();
  });

  it("should works with custom props", () => {
    const { result } = renderHook(() =>
      useExecutionQueue({ intervalTime: 500 })
    );
    expect(result.current.queue).toHaveLength(0);

    const mockFn = jest.fn();
    act(() => {
      result.current.addToQueue(mockFn);
    });
    expect(result.current.queue).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(250);
    });
    expect(result.current.queue).toHaveLength(1);
    expect(mockFn).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(250);
    });
    expect(result.current.queue).toHaveLength(0);
    expect(mockFn).toHaveBeenCalled();
  });
});
