export default function validaciones(name, value, errors = {}) {
  switch (name) {
    case "name":
      if (!value) {
        errors.name = "Name is necessary";
      } else {
        errors.name = "";
      }
      break;
    case "hp":
      if (value > 255 || !value) {
        errors.hp = "Life is necessary and less than 255";
      } else {
        errors.hp = "";
      }
      break;
    case "attack":
      if (value > 255 || !value) {
        errors.attack = "Attack is necessary and less than 255";
      } else {
        errors.attack = "";
      }
      break;
    case "defense":
      if (value > 255 || !value) {
        errors.defense = "Defense is necessary and less than 255";
      } else {
        errors.defense = "";
      }
      break;
    case "speed":
      if (value > 255 || !value) {
        errors.speed = "Speed is necessary and less than 255";
      } else {
        errors.speed = "";
      }
      break;
    case "weight":
      if (value > 999 || !value) {
        errors.weight = "Weight is necessary and less than 1000";
      } else {
        errors.weight = "";
      }
      break;
    case "height":
      if (value > 10 || !value) {
        errors.height = "Height is necessary and less than 10";
      } else {
        errors.height = "";
      }
      break;
    default:
  }

  /* if (!data.name) {
    errors.name = "Name is necessary";
  }

  if (data.hp > 255 || !data.hp) {
    errors.hp = "Life is necessary and less than 255";
  }

  if (data.attack > 255 || !data.attack) {
    errors.attack = "Attack is necessary and less than 255";
  }

  if (data.defense > 255 || !data.defense) {
    errors.defense = "Defense is necessary and less than 255";
  }

  if (data.speed > 255 || !data.speed) {
    errors.speed = "Speed is necessary and less than 255";
  }

  if (!data.height) {
    errors.height = "Height is necessary";
  }

  if (!data.weight) {
    errors.weight = "Weight is necessary";
  } */

  return errors;
}
