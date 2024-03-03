defmodule Reports.ParserTest do
  use ExUnit.Case

  alias Reports.Parser

  describe "parse_file/1" do
    test "parse the file" do
      filename = "report_1.csv"

      result =
        Parser.parse_file(filename)
        |> Enum.map(& &1)

      expected = [["10", "egg", 20], ["7", "curumim", 10]]

      assert result === expected
    end
  end
end
