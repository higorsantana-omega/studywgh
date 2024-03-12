defmodule Dvery.Factory do
  use ExMachina
  alias Dvery.User.User

  def user_factory do
    %User{ name: "Tester", email: "test@test.com", cpf: "11111111111", age: 20, address: "Test Address"}
  end
end
