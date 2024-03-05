defmodule Filter do
  def call(list_elements) do
    list_size = Enum.filter(filter_num(list_elements), &is_div/1)
    |> length()
    list_size + if list_size > 0, do: 1, else: 0
  end

  defp is_div(elem), do: rem(elem, 2) == 1

  defp filter_num (list_elements) do
    Enum.filter(list_elements, fn e -> is_number(e) end)
  end
end
