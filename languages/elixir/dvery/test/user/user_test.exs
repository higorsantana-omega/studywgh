defmodule Dvery.User.UserTest do
  use ExUnit.Case

  alias Dvery.User.User

  import Dvery.Factory

  describe "build/5" do
    test "when all params valid, return user" do
      result = User.build("Tester", "test@test.com", "11111111111", 20, "Test Address")
      expected = {
        :ok,
        build(:user)
      }

      assert result == expected
    end
  end
end
