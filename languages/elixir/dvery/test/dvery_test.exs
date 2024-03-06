defmodule DveryTest do
  use ExUnit.Case
  doctest Dvery

  test "greets the world" do
    assert Dvery.hello() == :world
  end
end
