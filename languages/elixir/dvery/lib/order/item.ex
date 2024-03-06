defmodule Dvery.Order.Item do
  @categories [:pizza, :japanese]
  @keys [:description, :price, :category, :quantity]
  @enforce_keys @keys

  defstruct @keys

  def build(description, price, category, quantity) when quantity > 0 and category in @categories do
    price
    |> Decimal.cast()
    |> build_item(description, category, quantity)
  end

  defp build_item({:ok, price}, description, category, quantity) do
    {:ok,
    %__MODULE__{
      description: description,
      price: price,
      category: category,
      quantity: quantity
    }}
  end

  defp build_item(:error, _description, _category, _quantity), do: {:error, "Invalid price"}
end
