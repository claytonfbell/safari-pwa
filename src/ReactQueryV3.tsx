import { useMutation } from "react-query";

export function ReactQueryV3() {
  const { mutateAsync: runMutation, status } = useMutation(
    () => new Promise((resolve) => setTimeout(resolve, 1000))
  );

  return (
    <div>
      <h1>react-query v3</h1>
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
