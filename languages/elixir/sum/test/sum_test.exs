defmodule SumTest do
  use ExUnit.Case
  doctest Sum

  test "greets the world" do
    assert Sum.call([1, 5]) == 12
  end
end
