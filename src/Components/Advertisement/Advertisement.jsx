import React from 'react'
import { CanvaEditor, EditorConfig } from 'canva-editor';
import logo from '../../Assets/gold-key.png'
// import { data } from './sampleData';
// import { useState } from 'react';

 /*const editorConfig = {
  logoUrl: logo,
  apis: {
    url: 'http://localhost:4000/api',
    searchFonts: '/fonts',
    searchTemplates: '/templates',
    searchTexts: '/texts',
    searchImages: '/images',
    searchShapes: '/shapes',
    searchFrames: '/frames',
    templateKeywordSuggestion: '/template-suggestion',
    textKeywordSuggestion: '/text-suggestion',
    imageKeywordSuggestion: '/image-suggestion',
    shapeKeywordSuggestion: '/shape-suggestion',
    frameKeywordSuggestion: '/frame-suggestion',
  },
  placeholders: {
    searchTemplate: 'Search templates',
    searchText: 'Search texts',
    searchImage: 'Search images',
    searchShape: 'Search shapes',
    searchFrame: 'Search frames',
  },
  editorAssetsUrl: 'http://localhost:4000/editor',
  imageKeywordSuggestions: 'animal,sport,love,scene,dog,cat,whale',
  templateKeywordSuggestions:
    'mother,sale,discount,fashion,model,deal,motivation,quote',
}; */

const Advertisement = () => {
  /* const [saving, setSaving] = useState(false);
  const name = '';
  const handleOnChanges = (changes: any) => {
    console.log('On changes');
    console.log(changes);

    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1e3);
  };

  const handleOnDesignNameChanges = (newName: string) => {
    console.log('On name changes');
    console.log(newName);

    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1e3);
  }; */
  return (
    <>
       {/* <CanvaEditor
      /* data={{
        name,
        editorConfig: data,
      }}
      config={editorConfig}
      saving={saving}
      onChanges={handleOnChanges}
      onDesignNameChanges={handleOnDesignNameChanges} 
      config={editorConfig}
    />
     */}

     <iframe src="https://canva-editor-three.vercel.app/" style={{width:'100%',height:'85vh',position:'relative'}} frameborder="0">
     </iframe>

    </>
  )
}

export default Advertisement