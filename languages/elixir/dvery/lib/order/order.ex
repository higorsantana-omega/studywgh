defmodule Dvery.Order.Order do
  alias Dvery.User.User
  alias Dvery.Order.Order
  alias Dvery.Order.Item

  @keys [:cpf, :address, :items, :total_price]
  @enforce_keys @keys

  defstruct @keys

  def build(%User{cpf: cpfd, address: addressd}, [%Item{} | _items] = itemsd) do
    IO.puts(cpfd)
    {:ok, %__MODULE__{
      cpf: cpfd,
      address: addressd,
      items: itemsd,
      total_price: calculate_price(itemsd)
    }}
  end

  def build(_user, _items), do: {:error, "invalid parameters"}

  defp calculate_price(items) do
    Enum.reduce(items, Decimal.new("0.00"), &sum_prices(&1, &2))
  end

  defp sum_prices(%Item{price: price, quantity: quantity}, acc) do
    price
    |> Decimal.mult(quantity)
    |> Decimal.add(acc)
  end
end
