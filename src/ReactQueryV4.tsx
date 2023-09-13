import { useMutation } from "@tanstack/react-query";

export function ReactQueryV4() {
  const { mutateAsync: runMutation, status } = useMutation(
    () => new Promise((resolve) => setTimeout(resolve, 1000))
  );

  return (
    <div>
      <h1>react-query v4</h1>
      <div>This example will hang indefinitly on when offline.</div>
      <div>
        <button
          disabled={status === "loading"}
          onClick={() => runMutation().then(() => console.log("done!"))}
        >
          run mutation ({status})
        </button>
      </div>
    </div>
  );
}
