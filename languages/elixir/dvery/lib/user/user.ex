defmodule Dvery.User.User do
  @keys [:name, :email, :age, :cpf, :address]
  @enforce_keys @keys

  defstruct @keys

  def build(name, email, cpf, age, address) when age >= 16 and is_bitstring(cpf) do
    {:ok,
    %__MODULE__{
      name: name,
      email: email,
      cpf: cpf,
      age: age,
      address: address
    }}
  end
end
