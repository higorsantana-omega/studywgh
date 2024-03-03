defmodule Reports do
  alias Reports.Parser
    def build(filename) do
      filename
      |> Parser.parse_file()
      |> Enum.reduce(report_acc(), fn [id, _food_name, price], report ->
        Map.put(report, id, report[id] + price)
      end)
      # |> Enum.map(fn line -> parse_line(line) end)
    end

    def higher(report), do: Enum.max_by(report, fn {_key, value} -> value end)

    def report_acc do
      Enum.into(1..1000000, %{}, &{Integer.to_string(&1), 0})
    end
  end

# Reduce
# def build(filename) do
#   "data/#{filename}"
#   |> File.stream!()
#   |> Enum.reduce(report_acc(), fn elem, acc ->
#     [id, _food, price] = parse_line(elem)
#     Map.put(acc, id, acc[id] + price)
#   end)
#   # |> Enum.map(fn line -> parse_line(line) end)
# end

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
