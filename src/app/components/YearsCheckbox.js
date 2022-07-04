import { Box, Card, Checkbox } from "@mui/material";
import { TitleTypography } from "../Charts/Mui/TitleTypography";

export function YearsCheckbox({ data, titleColors, selected, setSelected }) {
  if (selected === "all" && data.length) {
    setSelected(data);
  }

  const isAllSelected = data.length > 0 && selected.length === data.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "all") {
      setSelected(selected.length === data.length ? [] : data);
      return;
    }
    // added below code to update selected options
    const list = selected === "all" ? [] : [...selected];
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
    setSelected(list);
  };

  const listItem = data.map((option) => {
    return (
      <div key={option}>
        <Checkbox
          value={option}
          onChange={handleChange}
          checked={selected.includes(option)}
        />
        <span>{option}</span>
      </div>
    );
  });

  return (
    <>
      <Card raised={true} sx={{ height: "100%" }}>
        <TitleTypography title={"年月"} titleColors={titleColors} />
        <Box height={"87.7vh"} sx={{overflow:'auto'}}>
          <Checkbox
            value="all"
            onChange={handleChange}
            checked={isAllSelected}
          />
          <span> 全選</span>
          {listItem}
        </Box>
      </Card>
    </>
  );
}
