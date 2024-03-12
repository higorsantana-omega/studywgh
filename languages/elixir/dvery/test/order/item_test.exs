defmodule Dvery.Order.ItemTest do
  use ExUnit.Case

  alias Dvery.Order.Item

  import Dvery.Factory

  describe "build/5" do
    test "when all params valid, return item" do
      response = Item.build("Pizza", "10", :pizza, 1)
      assert response == {:ok, %Dvery.Order.Item{description: "Pizza", price: Decimal.new("10"), category: :pizza, quantity: 1}}
    end

    test "invalid price, return an error" do
      response = Item.build("Pizza", "invalid_price", :pizza, 1)
      assert response == {:error, "Invalid price"}
    end
  end
end
