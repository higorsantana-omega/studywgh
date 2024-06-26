defmodule Dvery.User.Agent do
  alias Dvery.User.User

  use Agent

  def start_link(_initial_state) do
    Agent.start_link(fn -> %{} end, name: __MODULE__)
  end

  def save(%User{} = user), do: Agent.update(__MODULE__, &update_state(&1, user))

  def get(cpf), do: Agent.get(__MODULE__, &get_user(&1k, cpf))

  defp get_user (state, cpf) do
    case Map.get(state, cpf) do
      nil -> {:error, "User not found"}
      user -> {:ok, user}
    end
  end

  def update_state(state, %User{cpf: cpf} = user), do: Map.put(state, cpf, user)
end
