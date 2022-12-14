import { Map } from "./types"

export const cities = [
  "Москва",
  "Санкт-Петербург",
  "Владивосток",
  "Новосибирск",
  "Сочи",
  "Лондон",
  "Нью-Йорк",
  "Ростов",
]

export const citiesCodes: Map = {
  "Москва": "SVO",
  "Санкт-Петербург": "LED",
  "Владивосток": "VVO",
  "Новосибирск": "OVB",
  "Сочи": "AER",
  "Лондон": "LCY",
  "Нью-Йорк": "JFK",
  "Ростов": "ROV",
}

export const DATE_REGEX = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.(\d{2})\s*$/;