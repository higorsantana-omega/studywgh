defmodule Sum do
  def call(list), do: sum(list, 0)

  defp sum([head | tail], acc) do
    add = fn a -> a + a end
    head = add.(head)
    sum(tail, head + acc)
  end

  defp sum([], acc) do
    acc
  end
end
