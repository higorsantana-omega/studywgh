defmodule Reports do
    def build(filename) do
      "data/#{filename}"
      |> File.stream!()
      |> Enum.reduce(%{}, fn elem, acc ->
        [id, _food, price] = parse_line(elem)
        Map.put(acc, id, acc[id] + price)
      end)
      # |> Enum.map(fn line -> parse_line(line) end)
    end

    def parse_line (line) do
        line
        |> String.trim()
        |> String.split(",")
        |> List.update_at(2, &String.to_integer/1)
    end
  end

# Pipe operator
# defmodule Reports do
#   def build(filename) do
#     File.read("data/#{filename}") |> file()
#   end

#   def file({:ok, result}), do: result
#   def file({:error, _result}), do: "Error"
# end


# Case
# defmodule Reports do
#   def build(filename) do
#     case File.read("data/#{filename}") do
#       {:ok, result} -> result
#       {:error, reason} -> reason
#       _ -> IO.puts("Error")
#     end
#   end
# end
