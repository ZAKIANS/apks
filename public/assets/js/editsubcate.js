/* eslint-disable no-undef */
const params = new URLSearchParams(window.location.search);
// var urls = new URL(window.location.href);
// var c = urls.searchParams.get("subcate");
// console.log(c);

const cate = params.get("cate");
const subcate = params.get("subcate");
const slug = params.get("slug");
let cates=cate;
        if ( cates.includes('-')) {
          cates =cates.replace(/-/g, '&');
        }
        let subcates=subcate;
        if ( subcates.includes('-')) {
          subcates =subcates.replace(/-/g, '&');
        }
        let slugs=slug;
        if ( slugs.includes('-')) {
          slugs =slugs.replace(/-/g, '&');
        }
document.getElementById("c_subCate").value=subcates;
document.getElementById('c_slug').value=slugs;

const addCates=document.getElementById('c_button');

// console.log("edit cate");
if (addCates) {
  addCates.addEventListener('click',(e)=>{
    e.preventDefault();
    const subcategory=document.getElementById("c_subCate").value;
    const image = document.getElementById("c_image").files[0];
    const slug=document.getElementById('c_slug').value;
    // console.log({subcates,slugs});
    const formData = new FormData();
    formData.append("image", image);
    formData.append("subCate", subcategory);
    formData.append("slug", slug);
    editSubCate(formData);
    }); 
}

 async function editSubCate(formData) {
    try {
        const allCate = await axios.patch(`${url}/apk/editSubCate/${cate}/${subcate}`, 
       formData
   );
        console.log({ allCate });
        window.location = `/subcategory?cate=${cate}`;
      } catch (error) {
        console.log(error);
      }
  }
   console.log("im from cate file");
  