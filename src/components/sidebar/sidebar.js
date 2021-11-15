import "./sidebar.scss";
import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import AnimateHeight from "react-animate-height";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Sideba = () => {
  const [subCategoriesOpen, setSubCategoriesOpen] = useState([]);
  const [mainCategoriesOpen, setMainCategoriesOpen] = useState([]);
  const [isServiceOpen, setIsServiceOpen] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 1155 });
  const subCategories = useSelector(
    (state) => state.subCategories.subCategories
  );

  const mainCategories = useSelector(
    (state) => state.mainCategories.mainCategories
  );

  const [mainField] = useState([
    { name: "Products", isOpen: false },
    { name: "Where To Buy", isOpen: false },
    { name: "Be Inspired", isOpen: false },
    { name: "Company", isOpen: false },
  ]);

  function configureIsServiceOpen() {
    let ServiceArary = [...isServiceOpen];
    mainField.map(() => {
      ServiceArary.push(false);
    });
    setIsServiceOpen(ServiceArary);
  }

  function configureMainCategoriesOpen() {
    let MainCategoriesArary = [...mainCategoriesOpen];
    mainCategories.map(() => {
      MainCategoriesArary.push(false);
    });
    setMainCategoriesOpen(MainCategoriesArary);
  }

  function configureSubCategoriesOpen() {
    let SubCategoryArary = [...subCategoriesOpen];
    subCategories.map(() => {
      SubCategoryArary.push(false);
    });
    setIsServiceOpen(SubCategoryArary);
  }

  useEffect(() => {
    configureIsServiceOpen();
    configureMainCategoriesOpen();
    configureSubCategoriesOpen();
  }, []);

  const toggleService = (i) => {
    var MF = [...isServiceOpen];
    MF[i] = !MF[i];
    setIsServiceOpen(MF);
  };

  const toggleMainCategories = (i) => {
    var MF = [...mainCategoriesOpen];
    MF[i] = !MF[i];
    setMainCategoriesOpen(MF);
  };

  const toggleSubCategories = (i) => {
    var MF = [...subCategoriesOpen];
    MF[i] = !MF[i];
    setSubCategoriesOpen(MF);
  };

  return isMobile ? (
    <Menu>
      <li>
        {mainField.map((mf, mfIndex) => (
          <li className="main-field">
            <div onClick={() => toggleService(mfIndex)}>{mf.name}</div>

            <AnimateHeight
              duration={500}
              height={isServiceOpen[mfIndex] ? "auto" : 0}
            >
              {mainCategories.map((mc, mcIndex) =>
                mfIndex === 0 ? (
                  <li className="main-categories">
                    <div onClick={() => toggleMainCategories(mcIndex)}>
                      {mc.category_name}
                    </div>

                    <AnimateHeight
                      duration={500}
                      height={mainCategoriesOpen[mcIndex] ? "auto" : 0}
                      style={{
                        marginTop: "10px",
                        marginBottom: 10,
                      }}
                    >
                      {subCategories.map((sc, scIndex) =>
                        sc.mainCategory._id == mc._id ? (
                          <li className="sub-categories">
                            <div onClick={() => toggleSubCategories(scIndex)}>
                              <Link to={sc.subCategory_slug}>
                                {sc.subCategory_name}
                              </Link>
                            </div>
                          </li>
                        ) : (
                          ""
                        )
                      )}
                    </AnimateHeight>
                  </li>
                ) : (
                  ""
                )
              )}
            </AnimateHeight>
          </li>
        ))}
      </li>
    </Menu>
  ) : (
    ""
  );
};

export default Sideba;
