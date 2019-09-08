import React, { Component } from 'react';
import { classes, routes } from '../utils/variables';

import Category from './Category';
import LinkButton from './LinkButton'
import { es } from '../assets/config.json';

class Categories extends Component {
  render() {
    const categories = this.props.categories;

    const categoriesList =
      categories.map((category) => {
        return (
          <LinkButton
            id={category.id}
            key={Math.random()}
            to={`${routes.playlists}/${category.id}`}
            onClick={(e) => { // on click handles the selected category
              this.props.handleClickedCategory(category);
            }}
          >
            <Category
              name={category.name}
              imgURL={category.icons[0].url}
              externalURL={category.href}
            />
          </LinkButton>
        )
      })

    return (
      <div className={classes.categoriesPage}>
        <div className={classes.categoriesContainer}>
          <h1>{es.homeHeader}</h1>
          <h2>{es.chooseCategory}</h2>
          <ul>
            {categoriesList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Categories;
