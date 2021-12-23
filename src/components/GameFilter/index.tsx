import { platform } from "os";
import React, { ChangeEvent, ReactElement } from "react";
import { GENRES, PLATFORMS, SORT_BY, TAGS } from "./Constants";
import { Form, Label, Select } from "./styles";

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameFilter = ({ onChange }: Props): ReactElement => (
  <Form onChange={onChange}>
    <Label htmlFor="platform-select">
      Plataforma:
      <Select name="platform" id="platform-select">
        {PLATFORMS.map((p) => (
          <option key={p.value} value={p.value}>
            {p.display}
          </option>
        ))}
      </Select>
    </Label>
    <Label htmlFor="genre-select">
      Gênero:
      <Select name="genre" id="genre-select">
        {GENRES.map((g) => (
          <option key={g.value} value={g.value}>
            {g.display}
          </option>
        ))}
      </Select>
    </Label>
    <Label htmlFor="tag-select">
      Tag:
      <Select name="tag" id="tag-select">
        {TAGS.map((t) => (
          <option key={t.value} value={t.value}>
            {t.display}
          </option>
        ))}
      </Select>
    </Label>
    <Label htmlFor="sortBy-select">
      Ordenar por:
      <Select name="sortBy" id="sortBy-select">
        {SORT_BY.map((s) => (
          <option key={s.value} value={s.value}>
            {s.display}
          </option>
        ))}
      </Select>
    </Label>
  </Form>
);

export default GameFilter;
