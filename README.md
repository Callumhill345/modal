===
Lightweight Modal

##Installation Instructions
1. download and add the modal.js file to your HTML document.
```
<script src="path/to/file/modal.js></script>
```
2.Add a <div> element with an id of your choosing. default is **"modal-wrapper"**
```
<div id="modal-wrapper">
  <!-- ALL MODAL CONTENT INSIDE HERE -->
</div>
```
3.Add an <a> tag with an id of your choosing. default is **"modal-button"**
```
  <a href="#" id="modal-button">Modal Button</a>
```
4.Now initialize the Modal object
```
  <script>
    let modal = new Modal();
  </script>
```
#####If you want to use more than one modal, simply choose a unique id on your wrapper and button and pass these names into
the initialization of your modal object
```
  <script>
    let modal = new Modal("my-unique-modal-wrapper","my-unique-modal-button");
  </script>
```
5. All done! now reload your page, click your button and the modal should be working.
